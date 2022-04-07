.PHONY: clear \
		install \
		changeset

clear:
	cls || clear

install:
	yarn install

changeset: clear
	yarn run changeset
