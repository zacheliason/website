#!/usr/bin/env zsh

cd ~/Documents/website/zacheliason_dot_com/

python3 render_quartos.py

bash git.sh
echo "git committed"
npm run build
sleep 20
echo "dist built"

ls dist/images/*
cp -R dist/* /Users/zacheliason/Documents/website/zacheliason.github.io

cd /Users/zacheliason/Documents/website/zacheliason.github.io
sleep .2
bash git.sh
sleep 2
echo "git committed"
echo "update complete"
