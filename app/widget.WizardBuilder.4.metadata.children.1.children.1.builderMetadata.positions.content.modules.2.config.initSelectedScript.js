
if(item.getId()>0){
  (new GetAttributeItemValueQuery(
      item.getId(), item.getType(), "newsAttributes", "transitionType")
  ).addEvent("success",function(r){

   callback(([
       'closed due to merger',
       'new outlet produced by merger', 
       'increase in service',
       'decrease in service',
       'closed',
       'new',
       'shifted to online',
       'shifted to online',
       'daily becomes a community paper',
       'daily (free) becomes a community paper'
   ]).indexOf(r.value));

  console.log(['icon', r]);
  }).execute();

}