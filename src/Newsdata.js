import { useState } from 'react';
import React,{ useEffect } from "react"
import axios from 'axios';
export default function Newsdata(query){
    const apikey="3103bc160fe142c08a96ba4fe12107fc"
    const url="https://newsapi.org/v2/everything?q="
    // ${url}${query}&apikey=${apikey}
    return axios.get(`${url}${query}&apikey=${apikey}`);
}