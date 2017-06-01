/**
 * Created by queen on 17-5-20.
 */
var index=require('./index');
var express=require('express');
var app=express();
app.use('/index',index);