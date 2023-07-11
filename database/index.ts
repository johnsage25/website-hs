import { BillingAddressSchema } from "./Schemas/BillingAddress";
import { CartSchema } from "./Schemas/Cart";
import { customerSchema } from "./Schemas/Customers";
import { DomainExtensionSchema } from "./Schemas/DomainExtensions";
import { EventsSchema } from "./Schemas/EventNotification";
import { FeaturedDomainTldSchema } from "./Schemas/FeaturedDomainTld";
import { PackageCategorySchema } from "./Schemas/PackageCategory";
import { PackagesSchema } from "./Schemas/Packages";
import { PricingSchema } from "./Schemas/Pricing";
import { ProductsSchema } from "./Schemas/Products";
import { SSHKeysSchema } from "./Schemas/SSHKeys";
import { SSLCertificateSchema } from "./Schemas/SSLCertificate";
import { ServerRegionsSchema } from "./Schemas/ServerRegions";
import { SessionSchema } from "./Schemas/Session";
import { VirtualizationSchema } from "./Schemas/Virtualization";
import VmCartSchema from "./Schemas/VmCart";
const mongoosePaginate = require("mongoose-paginate-v2");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_LNK);

customerSchema.plugin(mongoosePaginate);

delete mongoose.models.Cart;
// delete mongoose.models.Sessions;

PackagesSchema.virtual("product", {
  ref: "Products",
  localField: "_id",
  foreignField: "package",
});

PackageCategorySchema.virtual("products", {
  ref: "Products",
  localField: "_id",
  foreignField: "category",
});


customerSchema.virtual("BillingAddress", {
  ref: "BillingAddress",
  localField: "_id",
  foreignField: "customer",
});

VirtualizationSchema.virtual("pricing", {
  ref: "Pricing",
  localField: "_id",
  foreignField: "vm",
});

ProductsSchema.virtual("pricing", {
  ref: "Pricing",
  localField: "_id",
  foreignField: "product",
});

const BillingAddress =
  mongoose.models.BillingAddress ||
  mongoose.model("BillingAddress", BillingAddressSchema);

const Sessions =
  mongoose.models.Sessions || mongoose.model("Sessions", SessionSchema);

const Customers =
  mongoose.models.Customers || mongoose.model("Customers", customerSchema);

const EventsNotification =
  mongoose.models.Events || mongoose.model("Events", EventsSchema);

const SSHKeys =
  mongoose.models.SSHKeys || mongoose.model("SSHKeys", SSHKeysSchema);
const ServerRegions =
  mongoose.models.ServerRegions ||
  mongoose.model("ServerRegions", ServerRegionsSchema);

const Packages =
  mongoose.models.Packages || mongoose.model("Packages", PackagesSchema);

const Products =
  mongoose.models.Products || mongoose.model("Products", ProductsSchema);

const VmCart = mongoose.models.VmCart || mongoose.model("VmCart", VmCartSchema);

  const Pricing =
  mongoose.models.Pricing || mongoose.model("Pricing", PricingSchema);

const Virtualizations =
  mongoose.models.Virtualizations ||
  mongoose.model("Virtualizations", VirtualizationSchema);

const Cart = mongoose.models.Cart || mongoose.model("Cart", CartSchema);

const SSLCertificate =
  mongoose.models.SiteCertificate ||
  mongoose.model("SiteCertificate", SSLCertificateSchema);

const DomainExtensions =
  mongoose.models.DomainExtensions ||
  mongoose.model("DomainExtensions", DomainExtensionSchema);

const FeaturedDomainTld =
  mongoose.models.FeaturedDomainTld ||
  mongoose.model("FeaturedDomainTld", FeaturedDomainTldSchema);
const PackageCategories =
  mongoose.models.PackageCategories ||
  mongoose.model("PackageCategories", PackageCategorySchema);

export {
  mongoose,
  Customers,
  Sessions,
  Packages,
  FeaturedDomainTld,
  Products,
  VmCart,
  DomainExtensions,
  PackageCategories,
  SSLCertificate,
  Cart,
  Virtualizations,
  Pricing,
  BillingAddress,
  ServerRegions,
  EventsNotification,
  SSHKeys,
};
