import { useAccount, useReadContract } from "wagmi";
import contractAbi from "../pyth/ABI/abi.json";

const contractAddress = "0x3D6F5af4D54b058e8cf51b43F340f879EaABb6b4";

type ReturnType = {
  isLoading: boolean;
  data: any;
  error: any;
};

export const useGetChainLinkPrice = (id: number): ReturnType => {
  const { data, error } = useReadContract({
    abi: contractAbi,
    address: contractAddress,
    functionName: "getLatestChainlinkPrice",
    // args: [id],
  });

  return {
    isLoading: !data && !error,
    data,
    error,
  };
};
