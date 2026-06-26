DROP POLICY IF EXISTS "Anyone can submit an order" ON public.orders;

CREATE POLICY "Anyone can submit a valid order"
ON public.orders
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(trim(customer_name)) BETWEEN 1 AND 120
  AND length(trim(contact)) BETWEEN 3 AND 120
  AND length(trim(product_type)) BETWEEN 1 AND 80
  AND length(trim(size)) BETWEEN 1 AND 80
  AND (frame_style IS NULL OR length(frame_style) <= 80)
  AND (description IS NULL OR length(description) <= 2000)
  AND (photo_url IS NULL OR length(photo_url) <= 1000)
  AND status = 'new'
);