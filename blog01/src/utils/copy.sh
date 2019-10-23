#!/bin/sh
cd D:\F2E\node-blog-demo\blog01\logs
cp access.log $(date +%y-%m-%d).access.log
echo "" > access.log