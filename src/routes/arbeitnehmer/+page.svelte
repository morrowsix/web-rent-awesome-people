<script>
  import Button from "$lib/components/Button.svelte";
  import HeaderBanner2 from "$lib/components/HeaderBanner2.svelte";
  import TwoCol from "$lib/components/TwoCol.svelte";
  import H3 from "$lib/components/H3.svelte";
  import H2 from "$lib/components/H2.svelte";
  import Contactform from "$lib/components/Contactform.svelte";
  import H1 from "$lib/components/H1.svelte";
  import Accordion from "$lib/components/Accordion.svelte";
</script>

<svelte:head>
  <title
    >Personalvermittlungsagentur Kassel | Gastronomie & Hotelpersonal</title>
  <meta
    name="description"
    content="Wir finden die passenden Mitarbeiter für Ihr Unternehmen!
    Personalvermittlung für Gastronomie und Hotelpersonal | Personalvermittlungsagentur in
    Kassel
    " />
</svelte:head>
<HeaderBanner2
  imglink="/arbeitnehmer-header.jpg"
  altText="Fjolla und Karo im Cafe">
  <div class="flex justify-start">
    <H2>
      <span class="text-primary">Keine Angst mehr vor der</span><br />
      <span class="text-secondary">Unterschrift</span><span
        class=" text-primary">.</span>
    </H2>
  </div>
  <div
    class="text-primary font-light text-1xl sm:text-2xl pr-5 pb-5 pt-8 lg:pt-12 sm:leading-sm">
    <p>
      Wir Menschen wollen eine informierte Entscheidung treffen. Wir helfen Dir
      dabei. Wir kennen Deinen neuen Arbeitgebenden vielleicht bereits oder
      lernen ihn gerade kennen und können Dir sagen, ob Ihr zusammen passt.
      Falls der eine nicht passt, gibt es gewiss einen anderen. Wir küssen für
      dich die Frösche! Du bekommst den Prinz oder die Prinzessin!
    </p>
    <div class="py-10 flex">
      <Button
        text="Offene Stellen"
        link="/jobs#coveto_iframe"
        color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
    </div>
  </div></HeaderBanner2>
<TwoCol>
  <div slot="left" class="max-w-container-6 flex-1 pr-5 lg:pr-20">
    <H3>So viele freie Stellen - <br /> wo bewerbe ich mich?</H3>
    <ul
      class="font-light list-disc ml-7 text-1xl sm:text-2xl 2xl:whitespace-nowrap sm:leading-sm pt-5">
      <li>Bewirb dich bei mir - ich helfe Dir!</li>
      <li>Ich weiß auch schon, was du verdienst!</li>
    </ul>
  </div>

  <div
    slot="right"
    class="max-w-container-6 flex-1 pl-5 xl:pl-16 flex flex-col">
    <H3>Eine Bewerbung - <br /> viele Optionen!</H3>
    <ul
      class="font-light list-disc ml-7 text-1xl sm:text-2xl 2xl:whitespace-nowrap sm:leading-sm pt-5">
      <li>Ein Ansprechpartner für deinen Bewerbungsprozess</li>
      <li>Schnelle Antworten auf Fragen</li>
    </ul>
  </div>
</TwoCol>
<!-- Meine Mission -->
<div class="relative w-full">
  <div
    class="flex flex-col lg:flex-row justify-between items-center max-w-container-12 m-auto py-14 px-5 xl:px-0 gap-12">
    <div
      class="order-2 lg:order-1 basis-full lg:basis-1/2 shrink-0 self-start lg:self-center">
      <img
        class="w-full rounded-2xl"
        src="/meine-mission.jpg"
        alt="Bea im Cafe" />
    </div>
    <div
      class="flex flex-col justify-between order-1 lg:order-2 basis-full w-full lg:basis-1/2">
      <H2>
        <span class=" text-primary">Meine</span><br />
        <span class="text-secondary">Mission</span><span class=" text-primary"
          >!</span>
      </H2>
      <H3>
        <br />
        <span class="text-primary">Ich helfe dir einen</span><br />
        <span class="text-secondary">sicheren Hafen </span><span
          class="text-primary">für deine</span
        ><br />
        <span class="text-secondary">Zukunft </span><span class="text-primary"
          >zu finden:</span>
      </H3>
      <div
        class="text-primary font-light text-1xl sm:text-2xl pr-5 pb-5 pt-8 lg:pt-12 sm:leading-sm">
        <p>
          Wir wollen alle ankommen. Im beruflichen Heimathafen! Abhängig von
          deiner Wertewelt schauen wir uns an, welche Arbeitgebenden und
          Arbeitsplätze zu Dir passen.
        </p>
        <br />
        <p>
          Aber wir dürfen dennoch nicht vergessen, dass wir im Gastgewerbe
          unterwegs sind. In einem der schönsten Gewerben der Welt - Aus Gästen
          und Kolleg:innen Freunde machen und glücklich nach Hause gehen! Das
          klingt doch nach einem Ziel!
        </p>
      </div>
    </div>
  </div>
</div>
<Contactform />

<!-- SEO Texte -->
<div
  class="max-w-container-12 flex flex-col justify-center m-auto py-16 px-5 xl:px-0">
  <!-- Deine Awesome Personalvermittlungsagentur -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-4">
    <div class=" flex-1 flex flex-col justify-center">
      <H3
        ><span class="text-primary">Deine</span>
        <span class="text-secondary">awesome</span>
        <span class="text-primary">Personalvermittlungsagentur in Kassel</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5 pb-5 md:pb-0">
        Die Wahl einer guten Personalvermittlungsagentur in Kassel hat einen
        maßgeblichen Einfluss auf deine Karriere: Dein Personalvermittler kann
        eine wichtige Rolle beim Erreichen von Erfolg und Sicherheit im Beruf
        spielen; Der richtige Vermittler wird mit dir den Markt und deine
        aktuelle berufliche Situation in Einklang bringen, um den bestmöglichen
        Job für dich zu finden.
      </p>
      <Accordion title="Mehr erfahren">
        <p class="text-1xl sm:text-2xl font-light pb-5 md:pb-0">
          Du solltest dich bei der Personalvermittlung Kassel wohl fühlen und
          verstanden werden. Gute Kommunikation und eine vertrauliche Beziehung
          mit deinem Vermittler ist wichtig, um einen guten Prozess zu
          gestalten. Du solltest zudem aktiv nach einem Vermittler suchen, der
          sich auf deine Branche spezialisiert hat und sie gut kennt. Es ist ein
          wichtiger Faktor, wie gut sich dein Vermittler in deiner Branche
          auskennt und ob er Erfahrungen in diesem Bereich hat. Wenn du
          beispielsweise einen Job als Gastronom suchst, ist es wichtig, aktiv
          nach Personalvermittlung Gastronomie Kassel zu suchen. Als
          Hotelfachkraft solltest du einen Vermittler für die Hotellerie Kassel
          finden. Hier findest du die wichtigsten Faktoren, um den passenden
          Vermittler für dich zu finden und deine Karriere nach vorn zu bringen:
        </p>
      </Accordion>
    </div>
    <div class=" flex-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/illustrations/3.png" alt="" />
    </div>
  </div>
  <!-- Das Vertrauen bei der Personalvermittlung Kassel -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-16">
    <div class=" flex-1 order-2 md:order-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/illustrations/2.png" alt="" />
    </div>
    <div class=" flex-1 order-1 md:order-2 flex flex-col justify-center">
      <H3
        ><span class="text-primary">Das</span>
        <span class="text-secondary">Vertrauen</span>
        <span class="text-primary">bei der Personalvermittlung Kassel</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5 pb-5 md:pb-0">
        Wie in den meisten Bereichen menschlicher Interaktion ist Vertrauen und
        Wohlwollen maßgeblich für eine gute Beziehung. Das gilt sowohl im
        Privaten als auch im Beruf. Um deinem Vermittler wirklich vertrauen zu
        können, musst du ihn gut kennenlernen und dich im Vorfeld informieren.
        Dein Vermittler sollte von Anfang an zu dir passen und bei dir ein gutes
        Gefühl auslösen.
      </p>
      <Accordion title="Mehr erfahren">
        <p class="text-1xl sm:text-2xl font-light pb-5 md:pb-0">
          Es gibt einige Faktoren, die du bereits vor der Zusammenarbeit
          beachten kannst, um bei der Personalvermittlung Kassel einen guten
          Partner zu wählen. Welchen Ruf hat der Vermittler? Wie wird er von
          Arbeitnehmern und Arbeitgebern wahrgenommen? Welche Erfahrungsberichte
          gibt es? Sieh dir die Referenzen und die Kundenbewertungen genau an,
          um dir ein umfassendes Bild zu machen. Über wie viel Wissen verfügt
          die Vermittlungsagentur? Kennt sie den Markt und deine Branche? Zudem
          sollte dein Vermittler auf deine Branche spezialisiert sein. Je mehr
          er über deine Branche weiß und umso mehr Erfahrung er in diesem
          Bereich hat, desto besser. Die Arbeitsweise und die Philosophie der
          Vermittlungsagentur müssen ebenfalls gut zu dir passen. So kannst du
          dich während der Zusammenarbeit wohlfühlen und ihr werdet gemeinsam
          ohne Komplikationen den passenden Job für dich finden. Nicht alle
          Faktoren und Informationen kann man im Vorfeld schon erkennen oder
          abschätzen. Wenn du dir an einer Stelle nicht ganz sicher bist oder du
          Fragen hast, tritt einfach mit der Agentur in Kontakt und frag nach!
          Persönlicher Kontakt ist bei der Auswahl deines Vermittlers besonders
          wertvoll und gibt einen guten Einblick, um die zukünftige
          Zusammenarbeit einzuschätzen.
        </p>
      </Accordion>
    </div>
  </div>
  <!-- Das nötige Wissen und Erfahrung -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-16">
    <div class=" flex-1 flex flex-col justify-center">
      <H3
        ><span class="text-primary">Das nötige</span>
        <span class="text-secondary">Wissen</span>
        <span class="text-primary">und Erfahrung</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5 pb-5 md:pb-0">
        Um dich professionell zu betreuen und einen passenden Job zu finden,
        muss dein Vermittler dich und deine berufliche Situation verstehen. Er
        muss verstehen, was genau deine Stärken sind, welcher Tätigkeit du
        nachgehst und welche Veränderung du dir für dein berufliches Leben
        wünschst. Dazu muss er die Branche kennen, Erfahrung haben und gut
        verknüpft sein.
      </p>
      <Accordion title="Mehr erfahren">
        <p class="text-1xl sm:text-2xl font-light pb-5 md:pb-0">
          Je mehr Erfahrung der Vermittler in deiner Branche mitbringt desto
          besser für dich. Achte darauf, dass dein Vermittler auf deine Branche
          spezialisiert ist und diese auch gut kennt. So könnt ihr auf Augenhöhe
          kommunizieren und das Beste aus eurer Zusammenarbeit machen.
        </p>
      </Accordion>
    </div>
    <div class=" flex-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/illustrations/8.png" alt="" />
    </div>
  </div>
  <!-- Spezialisierung: Personalvermittlung Gastronomie Kassel & Hotellerie Kassel -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-16">
    <div class=" flex-1 order-2 md:order-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/illustrations/4.png" alt="" />
    </div>
    <div class=" flex-1 order-1 md:order-2 flex flex-col justify-center">
      <H3
        ><span class="text-primary">Spezialisierung:</span>
        <span class="text-secondary">Personalvermittlung</span>
        <span class="text-primary">Gastronomie Kassel & Hotellerie Kassel</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5 pb-5 md:pb-0">
        Wenn du dich umsiehst, wirst du schnell merken, dass es viele
        Vermittlungsagenturen gibt. Die meisten werden dir versprechen, das
        Beste für dich zu erreichen und einen passenden Job zu finden. Das ist
        allerdings viel leichter gesagt als getan. Viele große Agenturen
        betreuen eine Vielzahl an Kunden aus vielen verschiedenen Branchen.
      </p>
      <Accordion title="Mehr erfahren">
        <p class="text-1xl sm:text-2xl font-light pb-5 md:pb-0">
          Je mehr Branchen es gibt, desto oberflächlicher ist häufig das Wissen
          über diese. Je mehr Kunden betreut werden, desto weniger persönlich
          und engmaschig ist die Zusammenarbeit. Das solltest du bei der Auswahl
          deines Vermittlers unbedingt beachten. Am besten findest du eine
          lokale Agentur, welche sich auf wenige, miteinander verwandte Branchen
          spezialisiert hat. Als Gastronom oder Servicekraft solltest du
          beispielsweise nach einem Partner für die Personalvermittlung
          Gastronomie Kassel suchen. So stellst du sicher, dass dein Vermittler
          sich wirklich in deiner Branche auskennt und dir zu einem passenden
          Job verhelfen kann.
        </p>
      </Accordion>
    </div>
  </div>
  <!-- Die Chemie muss stimmen -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-16">
    <div class=" flex-1 flex flex-col justify-center">
      <H3
        ><span class="text-primary">Die</span>
        <span class="text-secondary">Chemie</span>
        <span class="text-primary">muss stimmen</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5 pb-5 md:pb-0">
        Wie bei den meisten menschlichen Interaktionen ist die Chemie zwischen
        deinem Personalvermittler und dir für eine zufriedenstellende Beziehung
        enorm wichtig. Ihr solltet euch gut verstehen und auf Augenhöhe
        miteinander kommunizieren. Je besser ihr miteinander klarkommt und
        kommuniziert, umso mehr Spaß und Erfolg wird eure Zusammenarbeit euch
        bringen.
      </p>
      <Accordion title="Mehr erfahren">
        <p class="text-1xl sm:text-2xl font-light pb-5 md:pb-0">
          Auch die Persönlichkeit und die Arbeitsweise deines Vermittlers müssen
          gut zu dir passen. Wenn ihr euch auf unterschiedlichen Wellenlängen
          befindet, wird der Prozess nur unnötig anstrengend und weniger
          erfolgreich. Sei dir also sicher, dass du einen Personalvermittler
          wählst, bei dem du dich gut aufgehoben fühlst, der zu deiner
          Persönlichkeit passt und mit dem du klar und gerne kommunizierst. Nimm
          dir die nötige Zeit und Ruhe, um deinen Vermittler kennenzulernen und
          sicherzustellen, dass ihr euch gut ergänzt. Dann werdet ihr gemeinsam
          sicherlich mit positiver Energie und Freude einen passenden Job für
          dich finden und deine Karriere vorantreiben!
        </p>
      </Accordion>
    </div>
    <div class=" flex-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/illustrations/6.png" alt="" />
    </div>
  </div>

  <!-- Nur das Beste für deine Karriere! -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-16">
    <div class=" flex-1 order-2 md:order-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/illustrations/7.png" alt="" />
    </div>
    <div class=" flex-1 order-1 md:order-2 flex flex-col justify-center">
      <H3
        ><span class="text-primary">Nur das</span>
        <span class="text-secondary">Beste</span>
        <span class="text-primary">für deine Karriere</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5 pb-5 md:pb-0">
        Sei bei deiner Auswahl ruhig wählerisch! Deine Karriere ist ein
        wichtiger Aspekt deines Lebens, du solltest dich also nicht mit weniger
        zufrieden geben, als du verdient hast! Such dir für die
        Personalvermittlung Kassel einen Vermittler, bei dem du dich wohl
        fühlst, der sich gut um dich und deine Anliegen kümmert und der das
        Beste für dich rausholt.
      </p>
      <Accordion title="Mehr erfahren">
        <p class="text-1xl sm:text-2xl font-light pb-5 md:pb-0">
          Sieh dir deinen potenziellen Vermittler genau an und prüf ihn auf Herz
          und Niere! Nimm persönlichen Kontakt auf und stell ihm alle Fragen,
          die dir wichtig sind. Nur so kannst du herausfinden, ob ihr
          miteinander harmoniert und wie gut du dich aufgehoben fühlst. Oft sind
          es nicht einmal die großen Agenturen, welche das Beste für dich und
          deinen Weg erreichen können. Größere Agenturen sind oft weniger
          spezialisiert und haben eine viel geringere Bindung mit ihren Kunden.
          In den meisten Fällen ist es viel effektiver, eine kleinere und mehr
          spezialisierte Agentur zu wählen, welche sich auf deine Branche
          konzentriert. Bei dieser Agentur werden Menschen arbeiten, die sich
          wirklich gut in deinem Bereich auskennen und genau wissen, was sie
          tun. Außerdem haben die Mitarbeiter häufig eine viel überschaubare
          Zahl an Klienten, die sie betreuen. Du bist also nicht nur eine
          Nummer, die irgendeinen Job zugewiesen bekommt. Eine kleine und
          spezialisierte Agentur nimmt sich die Zeit, um dich und deine
          Bedürfnisse kennenzulernen und die beste Auswahl an Jobs für dich zu
          treffen. Und das ist genau das, was du brauchst. Du brauchst nicht
          irgendeinen Vermittler, der dir irgendeinen Job verschafft. Du
          brauchst jemanden, der sich für dich und deine Bedürfnisse
          interessiert, das Beste für dich will und in deinem Interesse handelt.
          Du brauchst eine awesome Personalvermittlungsagentur in Kassel.
        </p>
      </Accordion>
    </div>
  </div>
  <!-- Noch heute den ersten Schritt in Richtung Traumjob machen! -->
  <div class="flex justify-center flex-col md:flex-row md:gap-14 pt-16">
    <div class=" flex-1 flex flex-col justify-center">
      <H3
        ><span class="text-primary"
          >Noch heute den ersten Schritt in Richtung</span>
        <span class="text-secondary">Traumjob</span>
        <span class="text-primary">machen!</span>
      </H3>
      <p class="text-1xl sm:text-2xl font-light pt-5 pb-5 md:pb-0">
        wartest du noch? Wenn du wirklich das Beste für dich und deine Karriere
        rausholen willst, dann leg direkt los! Sieh dir Vermittler an, die sich
        auf deine Branche spezialisiert haben und dich ansprechen und such den
        Kontakt! Je früher du dich darum kümmerst, umso besser.
      </p>
      <Accordion title="Mehr erfahren">
        <p class="text-1xl sm:text-2xl font-light pb-5 md:pb-0">
          Rent Awesome People hat sich auf die Personalvermittlung Gastronomie
          Kassel und Hotellerie Kassel spezialisiert. Wenn du also auf der Suche
          nach Jobs in der Gastronomie oder im Hotelwesen bist, sind wir genau
          der richtige Ansprechpartner für dich. Wir sollten uns unbedingt
          kennenlernen! Melde dich doch einfach bei uns, dann können wir uns
          austauschen und sehen, wie gut wir zueinander passen. Awesome, wir
          freuen uns drauf!
        </p>
      </Accordion>
    </div>
    <div class=" flex-1 flex flex-col justify-center">
      <img class="w-full rounded-2xl" src="/illustrations/6.png" alt="" />
    </div>
  </div>
</div>

<div
  class=" w-full bg-[url(/Rectangle.png),_url(/Sekretaerin.png)] bg-cover bg-center h-[500px] flex justify-center items-center mt-10">
  <div
    class="max-w-container-12 h-60 flex-1 flex flex-col justify-center items-start m-auto px-5 xl:px-0">
    <H2>
      <span class=" text-primary">Wer wagt gewinnt!</span><br />
      <span class="text-secondary">Vielleicht haben wir</span><br />
      <span class="text-secondary">deinen Traumjob</span><span
        class="text-primary">?</span>
    </H2>
    <div class="flex flex-col md:flex-row pt-5 gap-4">
      <Button
        text="Offene Stellen"
        link="/jobs#coveto_iframe"
        color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
      <Button
        text="Initiativ Bewerbung"
        link="mailto:info@rent-awesome-people.de?subject=Initiativ Bewerbung"
        color="bg-gradient-to-r from-gradient-dark to-gradient-light" />
    </div>
  </div>
</div>
