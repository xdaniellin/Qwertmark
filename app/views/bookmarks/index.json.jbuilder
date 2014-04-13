json.array!(@bookmarks) do |bookmark|
  json.extract! bookmark, :id, :key, :url
  json.url bookmark_url(bookmark, format: :json)
end
