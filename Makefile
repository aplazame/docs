#!make
SHELL := env PATH=$(shell npm bin):$(PATH) /bin/bash -O extglob

.SILENT:
.PHONY: install build

default: build
.DEFAULT_GOAL := default

export UNAME_S=$(shell uname -s)
export BRANCH_NAME=$(shell git symbolic-ref --short HEAD)

export BUILD_TIMESTAMP=$(date +%s)
export BUILD_HASH=$(shell git rev-parse --short HEAD)

ifndef LOCALE
  export LOCALE=es
endif

ifndef OUT_DIR
  export OUT_DIR=build
endif

ifndef CYPRESS_BROWSER
  export CYPRESS_BROWSER=chrome
endif

node_modules:; yarn install
install:; yarn install
i: install

test.cypress:
	cypress run --browser ${CYPRESS_BROWSER}

up: node_modules
	docusaurus start --locale $(LOCALE)

build: node_modules
	docusaurus build --out-dir $(OUT_DIR)

preview: node_modules
	docusaurus serve

