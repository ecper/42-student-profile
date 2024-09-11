import express from "express";
import mockProfiles from "../_mock/mockprofiles.js";

const app = express();

//全てのprofileを取得するAPI
app.get("/api/profiles", (req, res) => {
  res.json(mockProfiles);
});

//IDに一致するprofileを取得するAPI
app.get("/api/profiles/:id", (req, res) => {
  const profileId = parseInt(req.params.id);
  const userprofile = mockProfiles.find((profile) => profile.id === profileId);

  //profileが見つからない場合、404のエラーを返す
  if (!userprofile) {
    return res.status(404).json({ message: "profile not found" });
  }
  //見つかればprofile情報を返す
  res.status(200).json(profile);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
