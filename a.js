<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>To Make List for You</title>
  </head>
  <body>
    <h1>It's <%=day%> </h1>
    <ul>
     <h1> hi </h1>
    <% for(var i=0;i<items.length;i++){ %>
    <li><%= items[i] %></li>
  <%  } %>
    </ul>
    <form  action="/" method="post">
      <input type="text" name="newitem">
      <button type="submit" name="button">Add</button>

    </form>
  </body>
</html>
