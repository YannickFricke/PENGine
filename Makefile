.PHONY: clear \
		install \
		changeset \
		docs \
		qa \
		fix-qa

clear:
	cls || clear

install:
	yarn install

changeset: clear
	yarn run changeset

docs:
	yarn run make:docs

qa: clear
	yarn run packagaya sync info

fix-qa: clear
	yarn run packagaya sync execute
