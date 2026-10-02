import { Heart, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/components/site-shell";
import { products } from "@/lib/catalog";

export function ProductGrid({ onlySaved = false }: { onlySaved?: boolean }) {
  const { saved, toggle } = useWishlist();
  const visible = onlySaved ? products.filter((item) => saved.includes(item.id)) : products;
  if (visible.length === 0) return <div className="site-empty"><Heart size={34} strokeWidth={1.5} /><h2>Your wishlist is empty</h2><p>Save services and equipment from the shop to keep them here during this visit.</p><Button variant="site" asChild><Link to="/shop">Explore the shop <ArrowRight size={15} /></Link></Button></div>;
  return <div className="site-product-grid">{visible.map((item) => <article className="site-product" key={item.id}><div className="site-product-image"><img src={item.image} alt={item.name} loading="lazy" width={1200} height={900} /><Button variant="carousel" size="icon" className={saved.includes(item.id) ? "site-heart saved" : "site-heart"} aria-label={`${saved.includes(item.id) ? "Remove" : "Add"} ${item.name} ${saved.includes(item.id) ? "from" : "to"} wishlist`} onClick={() => toggle(item.id)}><Heart size={18} fill={saved.includes(item.id) ? "currentColor" : "none"} /></Button></div><div className="site-product-body"><span className="site-product-category">{item.category}</span><h3>{item.name}</h3><p>{item.description}</p><Button variant="site" asChild><Link to="/contact">ENQUIRE NOW <ArrowRight size={14} /></Link></Button></div></article>)}</div>;
}