class Post < ActiveRecord::Base
  has_man :comments

  def as_json(options = {})
    super(options.merge(include: :comments))
  end
end
