.PHONY: clear \
		install \
		changeset \
		docs

clear:
	cls || clear

install:
	yarn install

changeset: clear
	yarn run changeset

docs:
	typedoc --options ./typedoc.json
