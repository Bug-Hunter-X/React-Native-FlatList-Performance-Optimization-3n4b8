The solution involves using the `windowSize` and `maxToRenderPerBatch` props to optimize the rendering of the FlatList. The `windowSize` prop determines how many items are rendered around the visible area, while `maxToRenderPerBatch` limits the number of items rendered in each batch. 
Here's an example:
```javascript
<FlatList
  data={data}
  renderItem={renderItem}
  keyExtractor={(item) => item.id}
  windowSize={10} 
  maxToRenderPerBatch={10}
/>
```
By setting `windowSize` and `maxToRenderPerBatch` to appropriate values, you can significantly improve the performance of FlatList with large datasets.