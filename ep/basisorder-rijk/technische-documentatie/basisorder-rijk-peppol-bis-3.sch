<?xml version="1.0" encoding="UTF-8"?>
<schema xmlns="http://purl.oclc.org/dsdl/schematron" queryBinding="xslt2">
  <title>Extra validatie behorend bij de basisorder Rijk - versie voor Peppol BIS 3 (ORDER ONLY)</title>
  <!--
  
    Versie basisorder Rijk   - 0.9.0 (juni 2023)
    Datum basisorder Rijk    - 12 juni 2023
    Versie schematron        - 0.9.0
    Datum schematron         - 29 augustus 2023
  
  -->
  <ns prefix="cac" uri="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"/>
  <ns prefix="ext" uri="urn:oasis:names:specification:ubl:schema:xsd:CommonExtensionComponents-2"/>
  <ns prefix="cbc" uri="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"/>
  <ns prefix="doc" uri="urn:oasis:names:specification:ubl:schema:xsd:Order-2"/>
    
  <pattern id="cardinality-redefines">
    <rule context="/doc:Order/cac:BuyerCustomerParty/cac:Party">
      <!-- BR-NL-BOR-2 - BOR-fout-11 - doc:Order/cac:BuyerCustomerParty/cac:Party/cac:PartyName (verplicht - nodig voor BOR 2.1) -->
      <assert id="BR-NL-BOR-2" test="exists(cac:PartyName)" flag="fatal">BR-NL-BOR-2: Het element 'doc:Order/cac:BuyerCustomerParty/cac:Party/cac:PartyName' is verplicht, aangezien het onderliggende element 'cbc:Name' verplicht is (Basisorder 2.1 Naam klant).</assert>
      <!-- BR-NL-BOR-5 - BOR-fout-21 - doc:Order/cac:BuyerCustomerParty/cac:Party/cac:Contact/cbc:Name (verplicht) -->
      <assert id="BR-NL-BOR-5" test="exists(cac:Contact/cbc:Name)" flag="fatal">BR-NL-BOR-5: Het element 'doc:Order/cac:BuyerCustomerParty/cac:Party/cac:Contact/cbc:Name' is verplicht (Basisorder 2.7 Contactpersoon).</assert>
    </rule>
    <rule context="/doc:Order/cac:BuyerCustomerParty/cac:Party/cac:PartyLegalEntity">
      <!-- BR-NL-BOR-3 - BOR-fout-17 - doc:Order/cac:BuyerCustomerParty/cac:Party/cac:PartyLegalEntity/cbc:CompanyID (verplicht) -->
      <assert id="BR-NL-BOR-3" test="exists(cbc:CompanyID)" flag="fatal">BR-NL-BOR-3: Het element 'doc:Order/cac:BuyerCustomerParty/cac:Party/cac:PartyLegalEntity/cbc:CompanyID' is verplicht (Basisorder 2.2 OIN).</assert>
    </rule>
    <rule context="/doc:Order/cac:SellerSupplierParty/cac:Party">
      <!-- BR-NL-BOR-7 - BOR-fout-27 - doc:Order/cac:SellerSupplierParty/cac:Party/cac:PartyName (verplicht) -->
      <assert id="BR-NL-BOR-7" test="exists(cac:PartyName)" flag="fatal">BR-NL-BOR-7: Het element 'doc:Order/cac:SellerSupplierParty/cac:Party/cac:PartyName' is verplicht, aangezien het onderliggende element 'cbc:Name' verplicht is (Basisorder 3.1 Naam leverancier).</assert>
    </rule>
    <rule context="/doc:Order/cac:OrderLine/cac:LineItem">
      <!-- BR-NL-BOR-8 - BOR-fout-46 - doc:Order/cac:OrderLine/cac:LineItem/cbc:LineExtensionAmount (verplicht) -->
      <assert id="BR-NL-BOR-8" test="exists(cbc:LineExtensionAmount)" flag="fatal">BR-NL-BOR-8: Het element 'doc:Order/cac:OrderLine/cac:LineItem/cbc:LineExtensionAmount' is verplicht (Basisorder 6.7 Orderregelbedrag ex. BTW).</assert>
      <!-- BR-NL-BOR-9 - BOR-fout-48 - doc:Order/cac:OrderLine/cac:LineItem/cac:Price (verplicht) -->
      <assert id="BR-NL-BOR-9" test="exists(cac:Price)">BR-NL-BOR-9: Het element 'doc:Order/cac:OrderLine/cac:LineItem/cac:Price' is verplicht, aangezien het onderliggende element 'cbc:PriceAmount' verplicht is (Basisorder 6.5 Stuksprijs).</assert>
    </rule>
  </pattern>

  <pattern id="type-restrictions">
    <rule context="/doc:Order/cac:BuyerCustomerParty/cac:Party/cbc:EndpointID">
      <!-- BR-NL-BOR-1 - BOR-fout-10 - doc:Order/cac:BuyerCustomerParty/cac:Party/cbc:EndpointID@schemeID (waarde 0190) -->
      <assert id="BR-NL-BOR-1" test="@schemeID = '0190'" flag="fatal">BR-NL-BOR-1: Het attribuut 'schemeID' van het element 'doc:Order/cac:BuyerCustomerParty/cac:Party/cbc:EndpointID' moet altijd de waarde '0190' (OIN) bevatten, niet de gebruikte waarde '<value-of select="@schemeID" />'.</assert>
    </rule>
    <rule context="/doc:Order/cac:BuyerCustomerParty/cac:Party/cac:PartyLegalEntity/cbc:CompanyID">
      <!-- BR-NL-BOR-4 - BOR-fout-18 - doc:Order/cac:BuyerCustomerParty/cac:Party/cac:PartyLegalEntity/cbc:CompanyID@schemeID (waarde 0190) -->
      <assert id="BR-NL-BOR-4" test="@schemeID = '0190'" flag="fatal">BR-NL-BOR-4: Het attribuut 'schemeID' van het element 'doc:Order/cac:BuyerCustomerParty/cac:Party/cac:PartyLegalEntity/cbc:CompanyID' moet altijd de waarde '0190' (OIN) bevatten, niet de gebruikte waarde '<value-of select="@schemeID" />'.</assert>
    </rule>
    <rule context="doc:Order/cac:SellerSupplierParty/cac:Party/cbc:EndpointID">
      <!-- BR-NL-BOR-6 - BOR-fout-26 - doc:Order/cac:SellerSupplierParty/cac:Party/cbc:EndpointID@schemeID (waarde 0106 of 9944) -->
      <assert id="BR-NL-BOR-6" test="@schemeID = '0106' or @schemeID = '9944'" flag="fatal">BR-NL-BOR-6: Het attribuut 'schemeID' van het element 'doc:Order/cac:SellerSupplierParty/cac:Party/cbc:EndpointID' moet de waarde '0106' (KvK) of '9944' (BTW) bevatten, niet de gebruikte waarde '<value-of select="@schemeID" />'.</assert>
    </rule>
  </pattern>

</schema>