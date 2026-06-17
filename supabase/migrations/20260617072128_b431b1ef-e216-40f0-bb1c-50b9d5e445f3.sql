
CREATE TABLE public.orders (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT NOT NULL,
  contact TEXT NOT NULL,
  product_type TEXT NOT NULL,
  size TEXT NOT NULL,
  frame_style TEXT,
  description TEXT,
  photo_url TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.orders TO anon, authenticated;
GRANT ALL ON public.orders TO service_role;

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an order"
  ON public.orders FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
