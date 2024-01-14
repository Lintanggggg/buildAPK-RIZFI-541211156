import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

function LikeDislikeButton() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  }

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  }

  return (
<View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: 10,
          borderRadius: 5,
          borderWidth: 2, // Lebar border
          borderColor: 'black', // Warna border
        }}
        onPress={handleLike}
      >
        <AntDesign name="like2" size={20} color="black" />
        <Text style={{ color: 'black', fontSize: 16, marginLeft: 5 }}>{likes}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: 10,
          borderRadius: 5,
          marginLeft: 6,
          borderWidth: 2, // Lebar border
          borderColor: 'black', // Warna border
        }}
        onPress={handleDislike}
      >
        <AntDesign name="dislike2" size={20} color="black" />
        <Text style={{ color: 'black', fontSize: 16, marginLeft: 5 }}>{dislikes}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LikeDislikeButton;
