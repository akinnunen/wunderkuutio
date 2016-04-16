http://www.wunderdog.fi/wunderkuutio/

muistettava että kirjainta ei saa uudelleenkäyttää
- ympäröiviä kirjaimia palauttavan funktion otettava tämä huomioon

käydään sanalista läpi ja tutkitaan jokaisen rivin sana erikseen:

aakkonen

- a [0, 3, 3]
    - ympärillä: J P A D N O F
    -> a [0, 3, 2]
        - ympärillä A J P G O F D N O E J

eliminoidaan sanoja kirjain kerrallaan:

aakkonen

- löytyykö a
    -> kyllä
- löytyykö aa
    -> kyllä
- löytyykö aak
    -> ei
    -> otetaan listasta pois kaikki aak-aluiset


// console.log(util.inspect(this.layers, { showHidden: false, depth: null }));
