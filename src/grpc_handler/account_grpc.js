const PROTO_PATH = `${__dirname}../../../protos/account.proto`;
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const { AccountService } = grpc.loadPackageDefinition(packageDefinition);
const client = new AccountService.AccountService(
  process.env.NODE_ENV === "production"
    ? "188.166.198.84:50000"
    : "0.0.0.0:50000",
  grpc.credentials.createInsecure()
);

module.exports = client;
