import { response } from "express";

export const hello = ( request, response) => {
response.send("Hello is it me you're looking for?");
}

export const helloPerson = (request,response) => {
    
    const{person} = request.params; // here we extract person form the response
    response.send (`Hello, ${person}.`);
  
}
