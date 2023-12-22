import { Redirect } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function index() {
  return (
    <Redirect href="./(home)" />
  );
}
