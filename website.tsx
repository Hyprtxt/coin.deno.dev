import { h, jsx, json, serve } from "https://deno.land/x/sift@0.2.0/mod.ts";
import Layout from "./layout.tsx";

serve({
  "/": () =>
    jsx(
      <Layout>
        <div>
          <a
            className="donate-with-crypto"
            href="https://commerce.coinbase.com/checkout/cc7cbb0c-962e-476a-89bc-60e91351fc97"
          >
            Donate with Crypto
          </a>
          <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807"></script>
        </div>
      </Layout>
    ),
});
