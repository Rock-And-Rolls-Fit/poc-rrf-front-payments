export interface AliExpressProduct {
  app_sale_price?: string;
  original_price: string;
  product_detail_url: string;
  product_small_image_urls: ProductSmallImageUrls;
  second_level_category_name: string;
  target_sale_price: string;
  second_level_category_id: number;
  discount: string;
  product_main_image_url: string;
  first_level_category_id: number;
  target_sale_price_currency: PriceCurrency;
  target_app_sale_price_currency?: PriceCurrency;
  tax_rate: string;
  original_price_currency: PriceCurrency;
  shop_url: string;
  target_original_price_currency: PriceCurrency;
  product_id: number;
  target_original_price: string;
  product_video_url: string;
  first_level_category_name: FirstLevelCategoryName;
  sku_id: number;
  evaluate_rate: string;
  shop_name: string;
  sale_price: string;
  product_title: string;
  hot_product_commission_rate: string;
  shop_id: number;
  app_sale_price_currency?: PriceCurrency;
  sale_price_currency: PriceCurrency;
  lastest_volume: number;
  target_app_sale_price?: string;
  commission_rate: CommissionRate;
}

export type PriceCurrency = "USD" | "CNY";

export type CommissionRate = "7.0%";

export type FirstLevelCategoryName = "Home & Garden";

export interface ProductSmallImageUrls {
  string: string[];
}
