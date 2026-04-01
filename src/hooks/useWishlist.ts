import { useState, useEffect, useCallback } from "react";

export function useWishlist() {
  const [wishlist, setWishlist] = useState<number[]>(() => {
    try {
      const stored = localStorage.getItem("artika-wishlist");
      return stored ? JSON.parse(stored) : [];
    } catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem("artika-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = useCallback((id: number) => {
    setWishlist(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  }, []);

  const isInWishlist = useCallback((id: number) => wishlist.includes(id), [wishlist]);

  return { wishlist, toggleWishlist, isInWishlist };
}
