#!make
SHELL := env PATH=$(shell npm bin):$(PATH) /bin/bash -O extglob

.SILENT:
.PHONY: install

default: build
.DEFAULT_GOAL := default

export UNAME_S=$(shell uname -s)
export BRANCH_NAME=$(shell git symbolic-ref --short HEAD)

export BUILD_TIMESTAMP=$(date +%s)
export BUILD_HASH=$(shell git rev-parse --short HEAD)

ifndef LOCALE
  export LOCALE=es
endif

node_modules:; yarn install
install:; yarn install
i: install

up:
	yarn start --locale $(LOCALE)

build:
	yarn build

preview:
	yarn serve
