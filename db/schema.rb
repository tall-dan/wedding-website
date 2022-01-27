# frozen_string_literal: true

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20_200_314_212_906) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'events', force: :cascade do |t|
    t.string 'name', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
  end

  create_table 'guest_parties', force: :cascade do |t|
  end

  create_table 'guests', force: :cascade do |t|
    t.string 'first_name', null: false
    t.string 'last_name', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.bigint 'user_id'
    t.bigint 'guest_party_id', null: false
    t.index ['guest_party_id'], name: 'index_guests_on_guest_party_id'
    t.index ['user_id'], name: 'index_guests_on_user_id'
  end

  create_table 'invites', force: :cascade do |t|
    t.string 'status', default: 'pending', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.bigint 'guest_id', null: false
    t.bigint 'event_id', null: false
    t.index ['event_id'], name: 'index_invites_on_event_id'
    t.index ['guest_id'], name: 'index_invites_on_guest_id'
  end

  create_table 'meal_selections', force: :cascade do |t|
    t.string 'description', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.bigint 'event_id', null: false
    t.bigint 'guest_id', null: false
    t.index ['event_id'], name: 'index_meal_selections_on_event_id'
    t.index ['guest_id'], name: 'index_meal_selections_on_guest_id'
  end

  create_table 'song_requests', force: :cascade do |t|
    t.string 'user_input', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
  end

  create_table 'users', force: :cascade do |t|
    t.string 'email', null: false
    t.string 'first_name', null: false
    t.string 'last_name', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.string 'encrypted_password', default: '', null: false
    t.string 'reset_password_token'
    t.datetime 'reset_password_sent_at'
    t.datetime 'remember_created_at'
    t.string 'confirmation_token'
    t.datetime 'confirmed_at'
    t.datetime 'confirmation_sent_at'
    t.string 'unconfirmed_email'
    t.index ['confirmation_token'], name: 'index_users_on_confirmation_token', unique: true
    t.index ['email'], name: 'index_users_on_email'
    t.index ['reset_password_token'], name: 'index_users_on_reset_password_token', unique: true
  end

  add_foreign_key 'guests', 'guest_parties'
  add_foreign_key 'guests', 'users'
  add_foreign_key 'invites', 'events'
  add_foreign_key 'invites', 'guests'
  add_foreign_key 'meal_selections', 'events'
  add_foreign_key 'meal_selections', 'guests'
end
