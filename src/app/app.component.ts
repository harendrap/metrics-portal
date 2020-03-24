import { Component } from '@angular/core';
import * as pbi from 'powerbi-client';
//import { WebView, LoadEventData } from "tns-core-modules/ui/web-view";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo-App';
 
  ngOnInit() {
    this.getReports();
  }

  getReports() {
    const config = {
      type: 'report',
      uniqueId: 'f6bfd646-b718-44dc-a378-b73e6b528204',
      embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=f6bfd646-b718-44dc-a378-b73e6b528204&groupId=be8908da-da25-452e-b220-163f52476cdd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjpmYWxzZX19',
      accessToken: 'H4sIAAAAAAAEAB2WxcrGDLKE7-XfZiBuA7OIvHH3ZBd39wzn3s_H7ItueOiuqv_-Y6XvMKfFP__-50i2X94uvsmw18CNvTXUS-m3JDwRGed7ZUcHACWhxISiJAp0nfDx7XSf_M9SR_rSmo-91tYipC0KQm8oQqSh8GNk2kF-c4Nqp4NXaYLQ6rwrUrMpGzF3UzCA0tSlcOiI0ZJJ6pDDamRBpqh2PhOjCxOH3xu_qda2tI1Lu2W9cjQkc1pcG1ZVht2QzpL78ZSkW5JNps_-mQu8pZGqpDny6xW6Z7O2ldDm4x1jVCRvv1NWVml1F-V7Zq2LTsPJzOCsQEC5z8eb0cSdXjUiQYy0mK5ZMp0EFFEYA3E6I57Nlim2Skvhbc6KpFp87pP8xmIs-dkvYOg-ux7r0EmQUmWUMcp63dZf4ndQAG6nxEAVPZhGrYOY2m8-r3kBRPwwwpZw4_Dx1hxr69yjJkX6tDx5qTk3wVnEFeiVPA5F8lVNLYE4mjk2Ybg3Q9-6eSrii55vSDJVltX00d5HiHHTpJnLC6-q8Mt_0s7ba8Zp6qdCEjLvM8AluFJswFQFSzh-puYEAqS-PC-irQ77rkVewylDTMX2z-2TrWWVGTfvUJvovszEerVJO6vz71KGRaAc4BMRw069nekLBUauwOSkBCMrFKhrSPjOUkhF9YBIfKGAIwbDxH6ETkSHZkXYvzuPXwcXa_MWNNMJZNC9ovMA02q2zPTl2RfuqkPsjgTzfW4YHhz2h6aYu6hygLZOcNujbBJamDA1Sp187Y7rxEdC6fvC92a5w1FfxjA5D3tVq2Vhoe7vDG4ZY_vJ9dGwlUqq7KZ8j8vl46W-w3UmCWxjxtYUMUC8uxf66vObCdSv1HjLT4VOZJxu1ZnVmHTIOUljulOP1OXGdUVttLEXn5VWcO7jW_pPo94KM6N27GWIbtpdYIgpewVr64ZUNIkm4VYeMO8YjfV-EcPnNSBMZ69MiluyZaC05jRmB_YGkCuX4MrC7TX4d-b067k0o7X9e4RJAuvbARxBgS8xAoaszH23lmiEys6jEa5TilyXJt1t9SHWIykLx4E2Wow9iq-X48_Cx_DjGs9ot4EUbat-fiIzB2JPZz3h0KOaVafqaXGnVBTv5YZCqdmlGU52WVEIzySCyvFw23MDg6gCDSURxcFz0ouBcg8ha6mNAiFsjKzb9MNmwNBWaH2ZgBnYVQ_Eqn5rN22IgszVikjrHrvK3x98mRm2i3tfAEyu0WoxJrdkn9MIEXjT6kWdnBELddFfx6FeQJU1vkvbS487M6Y5x8k1Hmdjj-Oyj5YaaGM-KKbstCHLDQdc0HeuDa9llxfqZRL3OyFGcLO7x1wz5nugtScAhb81En5NxKxqayUgzGhy3wmPZkk0IWcpllmrDkXEV21oaVuEHTBxSTaX-fm-55dn548irNp9U1W_deCeogvqv5OjKmWAYbM9hIVeRNyQFJApXn7jnKkWKNfa2quACcOXLG7D3OJgk7jUv5YBAICFvpc028ulMdVLzNv0qS6blNpqeIXyTe2rEF3ocQEhBax4lu9FhsYHsjiz4-TGknOYPqcruBqi5SsuFH7OnQLZ0d79xXYm-vYHlN0QdQ-aPZbeakj35qlYjooadXxxiWTGr-CY1pCxr3yTBpTeE7jkDQzWC8bYBWCiidRNV7rOEeNV8qIz0yHYDupXReEiSKzu8cANxxMPqqubr-HiZvGZo8BND6U4zLy8QB7AVnKWhmWRYKMxpxAGTASu3rVqLLX9wzkgVhf--SkkxoDoxxAfw4aeWiS7UcH7zOhkO0cAERFYqI_L1h7Q2-5gZyX-ExQWJJTDgrRGwVarnUKNHAOkWcIbSLbLWZ0HUDkOPRlXwTHxLDLYKS7uTQKruwYKAyTVz5C903o2BmAFiLmVuyLmcBZ8defivwnRy4o3YON78qC37v49IYSAG9-46e3WNTqm1QqkcCv3CartjDpYnDZIGdk8nQqDbAbIGIfNdoSZTgsP96Ibk6IzHbH0eBaGl6KS2ENG1lgvikFC4bUNx8LKchjUCAKfpqe-4S7ahUMn6bPOrTq77btWrVsFwniKWV16U-OOhM12l2AjXTYuSveyg38J16XMniDbQLJ1jzJMNtK3TJdQyn616J9RSitzNzLR7vOzB52rDU_v5LAZ0D5vL9AV6iBUbgkoq5mpcPAePVgLHJ0wO70gvX8GceRFM3o8W0t4EOmaQSv9f_751z_c9i7HrJbvX_XQRuJARhEY7MT3yDLaGkU_khGb1BjjBG6M9PF7nxqehtxLbQGASsaoLmp1U6kK8NAFEt9k5y-VQ7F8hPxdMIsZyyDmdP8RrPEOk7k6V5To3e1HdyxwwZyYcVfA1ju_-NTNWPWN02L0Uzij0uzOX6ydGDDlAPrglw9pll_w737XAxA0jj2FlfEmZ_OVsuMYyth_yRNGVK06G4zwxwev4tJmwDSn-ITjjxJuuyYSPaHsgZTuR6eordBQhU0bjW2Cz5iX_Jr1wP2JM3z7zp-Zuj_ozPqLEbcbFGR5CfFNaFEjQ_BX41kmgNbWObofGIuJC-bWTOQIukQ_lcY4yUwEeN5ZCmP-8z_M79KUmxz8UeZ-dpGuGCB8w_yZZsA_qqTX_1O5bT2lx7mVf7L6VMaS7r0SZMnPIEeAm5h3bHhBHuMz5b0jDWpezAi2dDiSX_i_1PmRbRtjUMR7SyTzO4ycf31tBkx6DEIFH0ockIFFWBtso717dNvhIJpB_CtYSewTRBeI4gJe_A8ODWF7ZOPuaFfPtTMeU4v7DgT7mbdStFQE25kBmx-_tB1NDp1Y-_iQ86v_Ezb6b5uDKcFY8XGanLCKAkvvFbxLgTWzSp7nGgThpDzJqig6Fsf81ItjaMnDlOIk1Ayp0Dj4csQhYc7NdjBB1dL5XHwDT11Z-wpx_0XePfxu9ooideoPVE7tJflmlnyMhHNmh3b0JNmbFCQgJKynyoO9GShEw7vNmbz_MP_f_wMoxQQCbgsAAA=='
    };

    // Grab the reference to the div HTML element that will host the report.
    const reportsContainer = <HTMLElement>document.getElementById(
      'reportsContainer'
    );

    // Embed the report and display it within the div container.
    const powerbi = new pbi.service.Service(
      pbi.factories.hpmFactory,
      pbi.factories.wpmpFactory,
      pbi.factories.routerFactory
    );
    const report = powerbi.embed(
      reportsContainer,
      config
    );

    // Report.off removes a given event handler if it exists.
    report.off('loaded');
    // Report.on will add an event handler which prints to Log window.
    report.on('loaded', function() {
      console.log('Loaded');
    });

    report.off('pageChanged');
    report.on('pageChanged', e => {
      console.log(e);
    });

    report.on('error', function(event) {
      console.log(event.detail);
      report.off('error');
  });
  
  }
}
