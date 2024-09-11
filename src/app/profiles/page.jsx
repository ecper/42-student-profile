"use client";

import React, { useState } from "react";

export default function Profiles() {
  const [userId, setUserId] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  //API叩く
  const fetchProfile = (id) => {
    fetch(`http://localhost:3000/api/profiles/${id}`)
      .then((response) => {
        //レスポンスが返ってこなければエラーを返す
        if (!response.ok) {
          throw new Error("プロフィールが見つかりませんでした");
        }
        return response.json();
      })
      //データが来たらprofileにセット
      .then((data) => {
        setProfile(data);
        setError(null);
      })
      //エラーならエラーをセット
      .catch((error) => {
        setProfile(null);
        setError(error.message);
      });
  };
  //サブミットボタンの処理
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId) {
      fetchProfile(userId);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="">取得したいプロフィールのIDを入力</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder=""
            className="border border-gray-400 mb-4 mt-4"
          />
          <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">
            取得する
          </button>
        </form>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      {profile && (
        <div>
          <h3>{profile.name}</h3>
          <p>{profile.description}</p>
        </div>
      )}
    </div>
  );
}
