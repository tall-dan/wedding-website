# README

[![Build Status](https://travis-ci.com/tall-dan/wedding-website.svg?branch=master)](https://travis-ci.com/tall-dan/wedding-website)

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

## Ruby version - see .ruby-version

## Node version - see client/.nvmrc

## System dependencies

## Configuration

## Database creation

## Database initialization

## How to run the test suite - see .travis.yml

## Services (job queues, cache servers, search engines, etc.)

## Deployment instructions
Need ssh credentials to the box as well as aws credentials for s3.

* ssh credentials: login to lightsail using aws online console, and add
  contents of clint's `~/.ssh/id_rsa.pub` to server's
`~/.ssh/authorized_keys`

* aws credentials: See google drive OR just generate a new set via aws
  iam management (from aws management browser tool).
  * Belongs in `.credentials.aws`

* distribution id: Can be found in AWS console -> Cloudfront ->
  Distributions.
  * Belongs in `.distribution.aws`

* _If you changed a secret:_: `bundle exec cap production secrets_yml:setup`

### Deploy Independently, or Not

* Deploy BE: `bundle exec cap production deploy:backend`
* Deploy FE: `bundle exec cap production deploy:frontend`
* Deploy FE and BE: `bundle exec cap production deploy`
