date=`date +"%H.%M"`
name="Chakra"

target="$HOME/Téléchargements/Copies/CP-$name-$date"

mkdir -p $target

cp *.js* $target

cp -r pages $target

echo "Copie $name - $date"