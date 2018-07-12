class Product < ActiveRecord::Base
    has_many_attached :images
end