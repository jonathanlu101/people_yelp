class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/assets/:style/missing.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  def to_json(arg)
    super(methods: [:avatar_thumb_url]);
  end

  def avatar_medium_url
    return avatar.url(:medium)
  end

  def avatar_thumb_url
    return avatar.url(:thumb)
  end

end
