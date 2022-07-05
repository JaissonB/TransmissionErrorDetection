# TransmissionErrorDetection

Simple example of one transmission error detection using checksum metod.
<br/><br/>

<strong>Checksum</strong><br/>
 - Consiste na transmissão de todas as palavras juntamente com o resultado da sua soma binária invertida;
 - No receptor, as palavras são novamente somadas, essa nova soma é somada também com a soma invertida enviada pelo transmissor;
 - Se o resultado tiver qualquer bit diferente de '1' significa que ocorreu erro na transmissão, caso contrário tudo ocorreu corretamente.
 
 <br/><br/>
 
 Exemplo:<br/>
 11101010 + 10011100 = 110000110;<br/>
 soma invertida = 001111001;<br/>
 <br/>
 Considerando que não ocorra perca na transmissão:<br/>
           soma = 110000110<br/>
 soma invertida = 001111001<br/>
      resultado = 111111111<br/>

<br/><br/>
Institutional:
 - URI Erechim;
 - Ciência da computação, semestre 5;
 - Redes e Telecomunicações;
 - 2022
