import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.service';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private ingredients: Ingredient[] = new Array();

  constructor() {
    this.ingredients.push({
      name: '500 gr. de Espaguetis',
      active: true,
      imagen: "data:image/jpeg;base64,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"
    });
    this.ingredients.push({
      name: '175 gr. de carne picada de ternera',
      active: true,
      imagen: "https://www.carnevillamaria.com/media/catalog/product/cache/1/image/ec808153d738e8262bb5886ec7dca00a/c/a/carnepicadadeterneraficha.jpg"
    });
    this.ingredients.push({
      name: '175 gr. de carne picada de cerdo',
      active: true,
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQePyu4ZfjHcmscD5Wz5-Qxjdxp6LkzXOdZMDTH5TcX_wEG3mLj"
    });
    this.ingredients.push({
      name: '1 Cebolla',
      active: true,
      imagen: "https://laopinionla.files.wordpress.com/2015/11/colesterol-cebolla-copy.jpg?quality=80&strip=all&w=768"
    });
    this.ingredients.push({
      name: '1 Diente de ajo',
      active: true,
      imagen: "https://statics-cuidateplus.marca.com/sites/default/files/styles/natural/public/ajos.jpg?itok=UX7sF3ol"
    });
    this.ingredients.push({
      name: '2 Zanahorias',
      active: true,
      imagen: "https://www.gadis.es/supermercados/wp-content/uploads/2018/07/shutterstock_440493100.jpg"
    });
    this.ingredients.push({
      name: '700 gr de tomates',
      active: true,
      imagen: "https://www.lavanguardia.com/r/GODO/LV/p4/WebSite/2017/03/28/Recortada/img_ysaiz_20160908-162606_imagenes_lv_getty_istock_22114092_small-k6dG-U421271476554tOF-992x558@LaVanguardia-Web.jpg"
    });
    this.ingredients.push({
      name: 'Queso parmesano rallado',
      active: true,
      imagen: "https://previews.123rf.com/images/tobi/tobi1605/tobi160500871/57349259-de-queso-parmesano-rallado-y-la-cu%C3%B1a-en-el-fondo-blanco.jpg"
    });
    this.ingredients.push({
      name: 'Aceite de oliva',
      active: true,
      imagen: "https://www.lavanguardia.com/r/GODO/LV/p5/WebSite/2018/06/29/Recortada/img_ysaiz_20180105-161054_imagenes_lv_getty_istock-576732962-kjVB-U45480442211RdB-992x558@LaVanguardia-Web.jpg"
    });
    this.ingredients.push({
      name: 'Oregano',
      active: true,
      imagen: "https://www.dabruno.com/contenido/pagina628-1.jpg"
    });
    this.ingredients.push({
      name: 'Sal',
      active: true,
      imagen: "https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/09/17/Recortada/img_hmacia_20190917-135447_imagenes_lv_getty_istock-848612696-kGK-U47428365886X7H-992x558@LaVanguardia-Web.jpg"
    });
    this.ingredients.push({
      name: 'Pimienta',
      active: true,
      imagen: "https://mejorconsalud.com/wp-content/uploads/2013/05/pimienta-1-500x334.jpg"
    });

  }

  changeStatus(position: number) {
    this.ingredients[position].active = !this.ingredients[position].active;
  }

  getIngredients(): Ingredient[] {
    return this.ingredients;
  }
}
