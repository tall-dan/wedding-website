# README

[![Build Status](https://travis-ci.com/tall-dan/wedding-website.svg?branch=master)](https://travis-ci.com/tall-dan/wedding-website)

This README covers some general knowledge pieces about the app, but is
mostly a place for me to keep notes of how it's deployed

## Ruby version - see .ruby-version

## Node version - see client/.nvmrc

## System dependencies

## Configuration

## Database creation
Install postgresql in target env; create database & user from
`config/database.yml`

## Database initialization

## How to run the test suite - see .travis.yml

## Services (job queues, cache servers, search engines, etc.)

## Deployment instructions
### Ruby
* Use `ruby-install` to install
** Install globally in deployment env for ease of deployment
* Install `chruby` in deployment env as well, deploy script uses it
Need ssh credentials to the box as well as aws credentials for s3.

### Credentials
* ssh credentials: login to lightsail using aws online console, and add
  contents of clint's `~/.ssh/id_rsa.pub` to server's
`~/.ssh/authorized_keys`

* aws credentials: See google drive OR just generate a new set via aws
  iam management (from aws management browser tool).
  * Belongs in `.credentials.aws`

* Secrets are are managed by capistrano; make sure secret you've
  changed is linked in `lib/tasks/capistrano/process_management.rake`

### Generating TLS Certs
The cert for mcschepers-wedding.com has been generated using
[`certbot-dns-godaddy`](https://github.com/miigotu/certbot-dns-godaddy).
On a production server:
```
python3 -m venv ~/certbot
source ~/certbot/bin/activate
pip install certbot-dns-godaddy
sudo ~/certbot/bin/certbot certonly --authenticator dns-godaddy --dns-godaddy-credentials <deploy_path>/shared/config/credentials/godaddy_credentials.ini --dns-godaddy-propagation-seconds 900 --keep-until-expiring --expand --server https://acme-v02.api.letsencrypt.org/directory -d 'mcschepers-wedding.com' -d '*.mcschepers-wedding.com'

#### Debugging cert generation
certbot doesn't give the clearest error messages; it can be helpful to
`tail -f /var/log/letsencrypt/letsencrypt.log`

```

### Deploy Independently, or Not

* Deploy BE: `bundle exec cap production deploy:backend`
* Deploy FE: `bundle exec cap production deploy:frontend`
* Deploy FE and BE: `bundle exec cap production deploy`
