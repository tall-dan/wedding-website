#!/bin/bash

usage() {
  echo -e "Usage: $0 -x x-dimension -y y-dimension\n";
}

while getopts "x:y": opt; do
  case ${opt} in
    x) X_DIM="$OPTARG";;
    y) Y_DIM="$OPTARG";;
  esac
done

if [ -z $X_DIM ] || [ -z $Y_DIM ] ; then usage; exit 1; fi

PREFIX=thumb
cd public/photo_gallery
mkdir -p thumbnails

for i in [^$PREFIX]*.jpg
do
  echo "Processing image $i ..."
  NEWFILE="./thumbnails/$PREFIX_$i"
  if [ -f "$NEWFILE" ]; then
    echo "$NEWFILE exists - skipping."
  else
    jpegtran -flip vertical "$i" | djpeg | pnmscale -xysize $X_DIM $Y_DIM | cjpeg -optimize -progressive -quality 75 -outfile "$NEWFILE"
  fi
  echo $i processed
done

cd -
