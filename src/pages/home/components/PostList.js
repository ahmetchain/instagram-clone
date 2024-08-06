import React from "react";
import Post from "./Post";
import Mauro from "Icon/icardipp.jpg";
import MauroPost from "Icon/icardipost.jpg";
import Bein from "Icon/beinspor.jpg";
import BeinPost from "Icon/beinpost.jpg";
export default function PostList() {
  const post = [
    {
      id: 1,
      username: "mauroicardi",
      postTime: "1g",
      profileImage: Mauro,
      postImage: MauroPost,
      description:
        "Inicia una nueva semana, con la cabeza bien alta siempre, hacia nuestro nuevo objetivo 💛🦁♥️ #Hedef25",
      like: 438245,
      comment: 234,
    },
    {
      id: 2,
      username: "beinsportstr",
      postTime: "2g",
      profileImage: Bein,
      postImage: BeinPost,
      description:
        "⚫⚪ Atatürk Olimpiyat Stadı'nda kupa kaldırmak bizim için alışkanlık oldu. Golüm, Brezilyalı Ronaldo'nun golüne benzetildi. Maçtan önce arkadaşlarım bana yazmıştı. 'Gol atacaksın' demişlerdi. Golüm onlara armağan olsun.",
      like: 23587,
      comment: 133,
    },
  ];
  return (
    <div>
      {post.map((post) => (
        <Post id={post.id} post={post} />
      ))}
    </div>
  );
}
