import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import DetailSection from "../Components/CourseDetailScreen/DetailSection";
import ChapterSection from "../Components/CourseDetailScreen/ChapterSection";

export default function CourseDetailScreen() {
  const navigate = useNavigation();
  const params = useRoute().params;
  useEffect(() => {}, [params.course]);
  return (
    params.course && (
      <ScrollView>
        <View>
          <TouchableOpacity onPress={() => navigate.goBack()}>
            <Ionicons
              name="arrow-back-circle-outline"
              size={40}
              color="black"
            />
          </TouchableOpacity>
          <DetailSection course={params.course} />
          <View>
            <ChapterSection chapterList={params.course.chapters} />
          </View>
        </View>
      </ScrollView>
    )
  );
}
