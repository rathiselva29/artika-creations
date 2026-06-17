
CREATE POLICY "Anyone can upload an order photo"
  ON storage.objects FOR INSERT
  TO anon, authenticated
  WITH CHECK (bucket_id = 'order-uploads');
