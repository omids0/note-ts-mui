export type TNoteReq = {
  id: string;
  title: string;
  description: string;
};

interface INoteDataReq {
  req: TNoteReq;
}

export type { INoteDataReq };
