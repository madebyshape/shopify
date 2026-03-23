.DEFAULT_GOAL := help

.PHONY: setup
setup:
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
dev:
	npm run dev

.PHONY: build
build:
	npm run build

.PHONY: shopify
shopify:
	npm run shopify

.PHONY: pull
pull:
	npm run shopify-pull

.PHONY: check
check:
	npm run theme-check

.PHONY: help
help:
	@echo ""
	@echo "  MadeByShape x Shopify"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36mmake %-12s\033[0m %s\n", $$1, $$2}'
	@echo ""
