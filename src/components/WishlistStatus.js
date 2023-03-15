import { useWishlistContext } from "../context/WishlistContext";

function getItemsCount(wishlist) {
  let sum = 0;

  wishlist.forEach(element => {
    sum += element.count;
  });

  return sum;
}

export default function WishlistStatus() {
  const { wishlist } = useWishlistContext();

  const allItems = getItemsCount(wishlist);

  return (
    <div>{allItems}</div>
  )
}