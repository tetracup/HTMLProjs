for ((num=1;num<=$1;num++));
do
mkdir P$num;
touch ./P$num/index.html;
touch ./P$num/style.css;
done;
