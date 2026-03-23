.DEFAULT_GOAL := help

.PHONY: setup
setup: ## First-time project setup: copy .env, install dependencies
	@if [ ! -f .env ]; then \
		cp .env.example .env; \
		echo "✔  Created .env from .env.example — add your SHOPIFY_STORE value"; \
	else \
		echo "✔  .env already exists, skipping"; \
	fi
	npm install
	@echo ""
	@echo "✔  Setup complete. Run 'make dev' to start developing."

.PHONY: dev
dev: ## Start Shopify theme dev + Vite watch (requires .env)
	npm run dev

.PHONY: build
build: ## Production build (outputs to assets/)
	npm run build

.PHONY: shopify
shopify: ## Start Shopify theme dev only (no asset watcher)
	npm run shopify

.PHONY: pull
pull: ## Pull CMS changes from your Shopify dev theme
	npm run shopify-pull

.PHONY: check
check: ## Run Shopify Liquid theme check
	npm run theme-check

.PHONY: help
help: ## Show available commands
	@echo ""
	@echo "  MadeByShape x Shopify"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36mmake %-12s\033[0m %s\n", $$1, $$2}'
	@echo ""
