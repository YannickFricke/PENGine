.PHONY: clear \
		install \
		changeset

clear:
	cls || clear

install:
	yarn install

changeset:
	yarn run changeset
