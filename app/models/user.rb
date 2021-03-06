class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  before_save :default_values

  has_many :user_traits
  has_many :traits, through: :user_traits
  has_many :reviews, :class_name => 'Review', :foreign_key => 'owner_id'
  has_many :revieweds, :class_name => 'Review', :foreign_key => 'reviewer_id'

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_attached_file :avatar, styles: { medium: "300x300!>", thumb: "100x100!>", icon: "50x50!"}, default_url: "/assets/:style/missing.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  def default_values
    self.description ||= ""
    self.workplace ||= ""
  end

  def to_json(arg)
    super(methods: [:avatar_medium_url, :avatar_thumb_url])
  end

  def avatar_medium_url
    return avatar.url(:medium)
  end

  def avatar_thumb_url
    return avatar.url(:thumb)
  end

  def avatar_icon_url
    return avatar.url(:icon)
  end

  def reviewCount
    return reviews.length
  end

  def reviewExists?(reviewer_id)
    if reviews.find_by(reviewer_id: reviewer_id)
      return true
    else
      return false
    end
  end

end
