class PopulateEvents < ActiveRecord::Migration[6.0]
  def change
    Event.import([
      {name: 'Rehearsal Dinner'},
      {name: 'Wedding'}
    ])
  end
end
