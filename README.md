# React Native FlatList Performance Optimization

This repository demonstrates a common performance issue with the React Native FlatList component when handling large datasets and provides a solution for optimization.

## Problem

Rendering a large number of items in a FlatList can lead to slow rendering, app freezes, and even crashes due to the default behavior of rendering all items at once. 

## Solution

The solution involves using the `windowSize` and `maxToRenderPerBatch` props to control the number of items rendered simultaneously.  This significantly improves performance, especially with large datasets.

## Usage

1. Clone the repository.
2. Run `npm install` or `yarn install`.
3. Run the app using your preferred method (e.g., `npx react-native run-android` or `npx react-native run-ios`).

Observe the performance difference between the buggy and optimized FlatList implementations.